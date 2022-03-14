<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\File;
use Carbon\Exceptions\Exception;
use Illuminate\Support\Facades\Storage;
use Throwable;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Product::with('category', 'files')->get() ;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductRequest $request)
    {
        $validated = (object) $request->validated();
        $product = Product::create([
            'title' => $validated->title,
            'description' => $validated->description,
            'price' => $validated->price,
            'country' => $validated->country,
            'variety' => $validated->variety,
            'category_id' => $validated->category_id,
            'slug' => str()->slug($validated->title)
        ]);
        try {
            $fileName = time() . '_' . $validated->photos->getClientOriginalName();
            $filePath = $validated->photos->storeAs('products', $fileName, 'public');
            File::create([
                'product_id' => $product->id,
                'name' => time() . '_' . $validated->photos->getClientOriginalName(),
                'file_path' => '/public/' . $filePath
            ]);
        } catch (Throwable $e) {
            return $e;
        }
        return $product;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return Product::where('id', $product->id)->with('files')->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProductRequest  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }

    public function getProductImg(Product $product){
        $product = Product::where('id', $product->id)->with('files')->first();
        return ['files'=> $product->files[0]];
    }

}
