<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\File;
use Carbon\Exceptions\Exception;
use Illuminate\Http\Request;
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
        return Product::with('category', 'files')->get();
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
    public function store(Request $request)
    {
        request()->validate([
            'title' => 'required|max:255',
            'description' => 'required|max:1000',
            'price' => 'required|integer',
            'country' => 'required',
            'variety' => 'required',
            'category_id' => 'required|exists:categories,id',
            // 'photos.*' => 'required'
            // 'photos' => 'required'
        ]);


        // $validated = (object) $request->validated();
        // dd($validated);
        $product = Product::create([
            'title' => $request->title,
            'description' => $request->description,
            'price' => $request->price,
            'country' => $request->country,
            'variety' => $request->variety,
            'category_id' => $request->category_id,
            'slug' => str()->slug($request->title)
        ]);

        $fileName = time() . '_' . $request->photos->getClientOriginalName();
        $filePath = $request->photos->storeAs('products', $fileName, 'public');
        File::create([
            'product_id' => $product->id,
            'name' => time() . '_' . $request->photos->getClientOriginalName(),
            'file_path' => '/public/' . $filePath
        ]);
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
        return Product::where('id', $product->id)->get();
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

    public function getProductImg(Product $product)
    {
        $product = Product::where('id', $product->id)->with('files')->first();
        return ['files' => $product->files[0]];
    }
}
