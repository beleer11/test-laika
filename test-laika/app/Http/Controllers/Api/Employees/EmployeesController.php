<?php

namespace App\Http\Controllers\Api\Employees;

use App\Http\Controllers\Controller;
use App\Models\Employees;
use App\Models\Positions;
use App\Models\TypeDocument;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmployeesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     * @param $id
     */
    public function index($id = null)
    {
        //Get data to employees
        $data = Employees::withoutTrashed()
                ->join("positions as p", "employees.position_id", "=", "p.id")
                ->join("type_documents as td", "employees.document_type_id", "=", "td.id")
                ->select(
                    "employees.id",
                    "employees.name",
                    "employees.tel",
                    "employees.n_document",
                    "td.name as type_document",
                    "td.id as type_document_id",
                    "p.name as cargo",
                    "p.id as id_cargo"
                );

        if(!is_null($id)){
            $data = $data->where("employees.id", "=", $id);
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

                //validation type documento exists
                $type_document = TypeDocument::withoutTrashed()
                    ->where("id", "=", $data["document_type_id"])
                    ->first();

                if(is_null($type_document)){
                    DB::rollBack();
                    return response()->json([
                        'message' => "El tipo de documento ingresado para el empleado ". $data["name"] ." no existe en la base de datos"
                    ], 400);
                }

                //validation positions exists
                $positions = Positions::withoutTrashed()
                    ->where("id", "=", $data["position_id"])
                    ->first();

                if(is_null($positions)){
                    DB::rollBack();
                    return response()->json([
                        'message' => "El cargo ingresado para el empleado ". $data["name"] ." no existe en la base de datos"
                    ], 400);
                }

                //Validation to exists employee
                $employees = Employees::withoutTrashed()
                    ->where("n_document", "=", $data["n_document"])
                    ->first();

                if(!is_null($employees)){
                    DB::rollBack();
                    return response()->json([
                        'message' => "El empleado ". $data["name"] ." ya existe en la base de datos"
                    ], 400);
                }

                $employees = new Employees();

                $employees->name = $data["name"];
                $employees->tel = $data["tel"];
                $employees->n_document = $data["n_document"];
                $employees->document_type_id = $type_document->id;
                $employees->position_id = $positions->id;
                $employees->save();

            }

            DB::commit();

            return response()->json([
                "message" => "Empleados agregados con éxito"
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
                //validation type documento exists
                $type_document = TypeDocument::withoutTrashed()
                    ->where("id", "=", $data["document_type_id"])
                    ->first();

                if(is_null($type_document)){
                    DB::rollBack();
                    return response()->json([
                        'message' => "El tipo de documento ingresado para el empleado ". $data["name"] ." no existe en la base de datos"
                    ], 400);
                }

                //validation positions exists
                $positions = Positions::withoutTrashed()
                    ->where("id", "=", $data["position_id"])
                    ->first();

                if(is_null($positions)){
                    DB::rollBack();
                    return response()->json([
                        'message' => "El cargo ingresado para el empleado ". $data["name"] ." no existe en la base de datos"
                    ], 400);
                }

                $employees = Employees::find($id);

                $employees->name = $data["name"];
                $employees->tel = $data["tel"];
                $employees->n_document = $data["n_document"];
                $employees->document_type_id = $type_document->id;
                $employees->position_id = $positions->id;
                $employees->update();

            }

            DB::commit();

            return response()->json([
                "message" => "Empleados actualizados con éxito"
            ], 200);

        }catch (\Exception $exception) {

            DB::rollBack();
            return response()->json([
                'message' => $exception->getMessage(),
                "line"  => $exception->getLine()
            ], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        //delete records
        $type_document = Employees::find($id);

        if(!is_null($type_document)){
            $type_document->delete();

            return response()->json([
                "message" => "Se elimino el registro exitosamente"
            ], 200);
        }else{
            return response()->json([
                "message" => "El empleado no existe en la base de datos"
            ], 400);
        }
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function getDataSelect(){
        $cargos = Positions::withoutTrashed()
            ->get();

        $tipo_documento = TypeDocument::withoutTrashed()
            ->get();

        return response()->json([
            "cargo" => $cargos,
            "tipo_documento" => $tipo_documento
        ]);
    }
}
