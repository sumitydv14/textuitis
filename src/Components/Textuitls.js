import React, { useState } from 'react'

function Textuitls() {

    const [text , setText] = useState('');

   
    

  const  textuphenler = (e) =>{
      let uptext = text.toUpperCase();
      setText(uptext);
  }

  const textlohenler = (e) =>{
      let uptext = text.toLowerCase();
      setText(uptext);
  }

    return (
        <div>
            <section className="py-4" >
                <div className="container">
                     <div className="row">
                         <div className="col-md-12">
                              <div className="textuitls-box">
                                  <h1>Please Enter The Text</h1>
                                  <textarea className="form-control"  value={text} onChange={(e) => setText(e.target.value) }  rows="10" ></textarea>
                                  <button className="mt-4 mx-2 btn  btn-primary "  onClick={(e) =>  {textuphenler()}} >Click To Upcase</button>
                                  <button className="mt-4 mx-2 btn  btn-primary "  onClick={(e) =>  {textlohenler()}} >Click To LoCase</button>
                                  {/* <button className="mt-4 mx-2 btn  btn-primary "  onSubmit={(e) =>  {textuphenler()}} >Click To Upcase</button> */}
                              </div>
                         </div>
                     </div>

                     <div className="row mt-3 ">
                         <div className="col-md-12">
                             <div className="prewive-box">
                               <h5> your text {text.split(" ").length} word and your text length  {text.length}</h5>
                               <h2>Preview</h2>
                              <p>{text}</p>
                              </div>
                         </div>
                     </div>
                </div>
            </section>
        </div>
    )
}

export default Textuitls
