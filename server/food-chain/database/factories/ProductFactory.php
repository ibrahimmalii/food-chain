<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'category_id' => Category::factory(),
            'title' => $this->faker->title(),
            'description' => $this->faker->text(),
            'price' => $this->faker->numberBetween(),
            'variety' => $this->faker->text(),
            'country' => $this->faker->country(),
            'slug' => $this->faker->slug()
        ];
    }
}
