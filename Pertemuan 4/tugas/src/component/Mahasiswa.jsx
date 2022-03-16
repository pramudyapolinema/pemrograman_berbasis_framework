import React from "react";

const Mahasiswa = (props) => {
    return(
        <div>
            
            <div className="info-meta">
                
            </div>
            <hr />
            <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                    <img className="rounded-circle" src="http://placeimg.com/100/100/people" alt="Foto Mahasiswa" />
                </div>
                <div class="flex-grow-1 ms-3">
                    <h3>{props.nama}</h3>
                    <ul class="list-group list-group">
                        <li className="list-group-item borderless"><i className="fa fa-id-card"></i> {props.nim} </li>
                        <li className="list-group-item borderless"><i className="fa fa-clock"></i> {props.angkatan} </li>
                        <li className="list-group-item borderless"><i className="fa fa-map-pin"></i> {props.alamat} </li>
                        <li className="list-group-item borderless"><i className="fa fa-phone"></i> {props.nohp} </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Mahasiswa;