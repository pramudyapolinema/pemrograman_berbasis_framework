import React, { Component } from "react";
import './Mahasiswa.css';
import Mahasiswa from '../component/Mahasiswa.jsx';

class ListMahasiswa extends Component {
    render(){
        return(
            <div class="panel panel-default">
               <div class="panel-body">
                   <Mahasiswa nama="Pramudya Wibowo" nim="1941720054" alamat="Jl. Merapi Gg. 2 No. 26 Kota Probolinggo" angkatan="2019" nohp="082244101304"/>
                   <Mahasiswa nama="Pramudya Wibowo" nim="1941720054" alamat="Jl. Merapi Gg. 2 No. 26 Kota Probolinggo" angkatan="2019" nohp="082244101304"/>
                   <hr/>
                </div>
            </div>
        )
    }
}

export default ListMahasiswa;