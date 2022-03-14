<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::create([
            'name' => 'admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('password'),
            'phone_number' => '+201096121030',
            'remember_token' => str()->random(10),
            'email_verified_at' => now()
        ]);
        \App\Models\Category::insert([
            ['title' => 'Fruits', 'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste soluta, pariatur nulla magnam quaerat molestias error, molestiae nostrum minus libero voluptatum quas accusamus quasi fugit mollitia quos sapiente provident sunt.'],
            ['title' => 'Legumes', 'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste soluta, pariatur nulla magnam quaerat molestias error, molestiae nostrum minus libero voluptatum quas accusamus quasi fugit mollitia quos sapiente provident sunt.']
        ]);

        // \App\Models\Product::factory(5)->create();
    }
}
