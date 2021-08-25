import React, {useState} from "react"

const Modal = () =>{
    const closeModal = ()=>{
        document.querySelector('.modal-box').classList.toggle('hidden')
    }
    return(
        <>
        <div className="modal-box hidden">
            <h1>hello world</h1>
            <button onClick={closeModal}>X</button>
        </div>
        </>
    )

}

export default Modal