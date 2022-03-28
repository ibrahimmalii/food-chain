<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Laravel\Scout\Searchable;

class Product extends Model
{
    use HasFactory, Searchable;
    protected $guarded = ['id'];
    protected $with = ['files'];
    protected $hidden = ['created_at', 'updated_at'];

    const SEARCHABLE_FIELDS = ['title'];


    /**
     * Searchable attributes
     *
     * @return string[]
     */
    public function toSearchableArray()
    {
        return [
            'title' => $this->title,
        ];
    }


    /**
     * relate products with categories
     *
     * @return BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public function files(): HasMany
    {
        return $this->hasMany(File::class, 'product_id', 'id');
    }
}
