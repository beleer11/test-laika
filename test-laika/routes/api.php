<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Employees\EmployeesController;
use App\Http\Controllers\Api\Positions\PositionsController;
use App\Http\Controllers\Api\TypeDocument\TypeDocumentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['api-laika'], 'namespace' => 'Api'], function () {
    /* Employees */
    Route::group(["prefix" => "employees", "namespace" => "Employees"], function () {
        Route::get('index/{id?}', [EmployeesController::class, 'index']); //get index to employee in the database
        Route::post('store', [EmployeesController::class, 'store']); //store to employee in the database
        Route::put('update/{id?}', [EmployeesController::class, 'update']); //update to employee in the database
        Route::delete('delete/{id?}', [EmployeesController::class, 'destroy']); //delete to employee in the database
        Route::get('getDataSelect', [EmployeesController::class, 'getDataSelect']); //delete to employee in the database
    });

    /* Positions */
    Route::group(["prefix" => "positions", "namespace" => "Positions"], function () {
        Route::get('index/{id?}', [PositionsController::class, 'index']); //get index to position in the database
        Route::post('store', [PositionsController::class, 'store']); //store to position in the database
        Route::put('update/{id?}', [PositionsController::class, 'update']); //update to position in the database
        Route::delete('delete/{id?}', [PositionsController::class, 'destroy']); //delete to position in the database
    });

    /* Type document */
    Route::group(["prefix" => "type_document", "namespace" => "TypeDocument"], function () {
        Route::get('index/{id?}', [TypeDocumentController::class, 'index']); //get index type_document position in the database
        Route::post('store', [TypeDocumentController::class, 'store']); //store to type_document in the database
        Route::put('update/{id?}', [TypeDocumentController::class, 'update']); //update to type_document in the database
        Route::delete('delete/{id?}', [TypeDocumentController::class, 'destroy']); //delete to type_document in the database
    });
});
