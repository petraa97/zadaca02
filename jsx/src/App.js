
var x = "Prvi string";
var y = "Drugi string";

export function App(){
  return(
     <h1> Ovo je tekst </h1>
  );
}

export function App2(){
  return(
    <div>
      Ovo je jedan string: {x}
    </div>
  );
}

export function App3(){
  return(
    <div>
      Ovo su dva stringa: {x} {y}
    </div>
  )
}