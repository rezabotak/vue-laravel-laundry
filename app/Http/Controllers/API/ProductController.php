<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductCollection;
use App\LaundryPrice;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = LaundryPrice::with(['type', 'user'])->orderBy('created_at', 'DESC');
        if (request()->q != '') {
            $products = $products->where('name', 'LIKE', '%' . request()->q . '%');
        }
        $products = $products->paginate(10);
        return new ProductCollection($products);
    }
}
