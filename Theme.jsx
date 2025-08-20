import React from 'react'
import { useState } from 'react'
import "./Theme.css"

function Theme() {
    const[darkmode,setDarkmode] = useState(false);

    const changing = ()=>{
      setDarkmode(!darkmode);

    }
    
  return (
    <div className={ darkmode?'dark':'light'}>

       <button onClick={changing}>SWITCH THEME</button>
<div className='bodyofpara'>
    <h1>HELLO WORLD</h1>
<p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ips
um has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type spe
cimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise
d in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageM
aker including versions of Lorem Ipsum.
<br/>
Why do we use it?
It is a long established fact that a reader will be distracted by the readable content 
of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to us
ing 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
 their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the
  years, sometimes by accident, sometimes on purpose (injected humour and the like).

<br/>
Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
 piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
 
  a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
  
  
  
   words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical litera
   
   ture, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extreme
   s of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The f
   irst line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.



The standard chunk of Lorem Ipsum used since the 1500s is <br/>reproduced below for 
those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" b
y Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
</p>

</div>

    </div>
  )
}

export default Theme