<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->string("name", 100);
            $table->string("tel", 10);
            $table->string("n_document", 15);
            $table->bigInteger("document_type_id")->unsigned();
            $table->bigInteger("position_id")->unsigned();
            /* Foreign keys */
            $table->foreign('document_type_id')->references('id')->on('type_documents');
            $table->foreign('position_id')->references('id')->on('positions');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
