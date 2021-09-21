<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>TAMBAH DATA KARTU KELUARGA</h4>
                        <hr>

                        <form @submit.prevent="store">

                           <div class="form-group">
                                <label for="nik" class="font-weight-bold">NIK</label>
                                <input type="number" class="form-control" v-model="kk.nik" placeholder="Masukkan nik">
                                <!-- validation -->
                                <div v-if="validation.nik" class="mt-2 alert alert-danger">
                                    {{ validation.nik[0] }}
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="nama_kepala" class="font-weight-bold">NAMA KEPALA KELUARGA</label>
                                <input type="text" class="form-control" v-model="kk.nama_kepala" placeholder="Masukkan kepala keluarga">
                                <!-- validation -->
                                <div v-if="validation.nama_kepala" class="mt-2 alert alert-danger">
                                    {{ validation.nama_kepala[0] }}
                                </div>
                            </div>

                           <div class="form-group">
                            <label for="jumlah_keluarga" class="font-weight-bold">JUMLAH KELUARGA</label>
                            <select class="form-select" v-model="kk.jumlah_keluarga" placeholder="Masukkan jumlah_keluarga">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5>">Lebih dari 5 orang</option>
                             </select>
                               <!-- validation -->
                                <div v-if="validation.jumlah_keluarga" class="mt-2 alert alert-danger">
                                    {{ validation.jumlah_keluarga[0] }}
                                </div>
                             </div>

                           <div class="form-group">
                            <label for="rtrw" class="font-weight-bold">RT / RW</label>
                            <select class="form-select" v-model="kk.rtrw" placeholder="Masukkan rtrw">
                                    <option value="01/03">01/03</option>
                                    <option value="02/03">02/03</option>
                                    <option value="03/04">03/04</option>
                                    <option value="04/05">04/05</option>
                             </select>
                               <!-- validation -->
                                <div v-if="validation.rtrw" class="mt-2 alert alert-danger">
                                    {{ validation.rtrw[0] }}
                                </div>
                             </div>

                            <div class="form-group">
                                <label for="alamat" class="font-weight-bold">ALAMAT</label>
                                <textarea class="form-control" rows="4" v-model="kk.alamat" placeholder="Masukkan Alamat warga"></textarea>
                                <!-- validation -->
                                <div v-if="validation.alamat" class="mt-2 alert alert-danger">
                                    {{ validation.alamat[0] }}
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">SIMPAN</button>
                        </form>                        

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {

    setup() {

        const kk = reactive({
            nik: '',
            nama_kepala: '',
            jumlah_keluarga: '',
            rtrw: '',
            alamat: ''
        })

        //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()

        //method store
        function store() {

            let nik   = kk.nik
            let nama_kepala = kk.nama_kepala
            let jumlah_keluarga = kk.jumlah_keluarga
            let rtrw = kk.rtrw
            let alamat = kk.alamat

            axios.post('http://localhost:8000/api/kk', {
                nik: nik,
                nama_kepala: nama_kepala,
                jumlah_keluarga: jumlah_keluarga,
                rtrw: rtrw,
                alamat: alamat
            }).then(() => {

                //redirect ke post index
                router.push({
                    name: 'kk.index'
                })

            }).catch(error => {
                //assign state validation with error 
                validation.value = error.response.data
            })

        }

        //return
        return {
            kk,
            validation,
            router,
            store
        }

    }

}
</script>

<style>
    body{
       background: rgb(18, 69, 163);
    }
</style>