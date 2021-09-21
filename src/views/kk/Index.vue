<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>DATA KARTU KELUARGA</h4>
                        <hr>
                        <router-link :to="{name: 'kk.create'}" class="btn btn-md btn-success">TAMBAH DATA KK</router-link>

                        <table class="table table-striped table-bordered mt-4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">NIK</th>
                                    <th scope="col">NAMA KEPALA</th>
                                    <th scope="col">JUMLAH KELUARGA</th>
                                    <th scope="col">RT / RW </th>
                                    <th scope="col">ALAMAT </th>
                                    <th scope="col">OPTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(kk, index) in kk" :key="index">
                                    <td>{{ kk.nik }}</td>
                                    <td>{{ kk.nama_kepala }}</td>
                                    <td>{{ kk.jumlah_keluarga }}</td>
                                    <td>{{ kk.rtrw }}</td>
                                    <td>{{ kk.alamat }}</td>
                                    <td class="text-center">
                                        <router-link :to="{name: 'kk.edit', params:{id: kk.id }}" class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                                      <button @click.prevent="kkDelete(kk.id)" class="btn btn-sm btn-danger ml-1">DELETE</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'

export default {

     setup() {
        //reactive state
        let kk = ref([])
        //mounted
        onMounted(() => {
            //get API from Laravel Backend
            axios.get('http://localhost:8000/api/kk')
            .then(response => {
              
              //assign state warga with response data
              kk.value = response.data.data
            }).catch(error => {
                console.log(error.response.data)
            })
        })
        //method delete
        function kkDelete(id) {
            
            //delete data warga by ID
            axios.delete(`http://localhost:8000/api/kk/${id}`)
            .then(() => {
              
              //splice warga 
              kk.value.splice(kk.value.indexOf(id), 1);
            }).catch(error => {
                console.log(error.response.data)
            })
        }
        //return
        return {
            kk,
            kkDelete
        }
    }
}
</script>

<style>
    body{
        background:  rgb(18, 69, 163);
    }
</style>