<?php

namespace App\Http\Controllers\Api\TypeDocument;

use App\Http\Controllers\Controller;
use App\Models\Positions;
use App\Models\TypeDocument;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TypeDocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index($id = null)
    {
        //Get data to type document
        $data = TypeDocument::withoutTrashed()
            ->select(
                "id",
                "name",
                DB::raw("CASE WHEN status = 1 THEN 'Activo' ELSE 'Inactivo' END AS status")
            );

        if(!is_null($id)){
            $data = $data->where("id", "=", $id);
        }

        return response()->json([
            "data" => $data->get()
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        //Save news records
        try {
            DB::beginTransaction();

            foreach ($request->all() as $data) {

                $type_document = new TypeDocument();

                $type_document->name = $data["name"];
                $type_document->status = $data["status"];
                $type_document->save();

            }

            DB::commit();

            return response()->json([
                "message" => "Tipo de documento agregados con éxito"
            ], 200);

        }catch (\Exception $exception) {

            DB::rollBack();
            return response()->json([
                'message' => $exception->getMessage()
            ], 400);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        //Update news records
        try {
            DB::beginTransaction();

            foreach ($request->all() as $data) {

                $type_document = TypeDocument::find($id);

                $type_document->name = $data["name"];
                $type_document->status = $data["status"];
                $type_document->update();

            }

            DB::commit();

            return response()->json([
                "message" => "Tipo de documento actualizado con éxito"
            ], 200);

        }catch (\Exception $exception) {

            DB::rollBack();
            return response()->json([
                'message' => $exception->getMessage()
            ], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param   $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        //delete records
        $type_document = TypeDocument::find($id);

        if(!is_null($type_document)){
            $type_document->delete();

            return response()->json([
                "message" => "Se elimino el registro exitosamente"
            ], 200);
        }else{
            return response()->json([
                "message" => "El tipo de documento no existe en la base de datos"
            ], 400);
        }

    }
}
