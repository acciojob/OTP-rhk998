//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes.forEach((code,idx)=>{
	code.addEventListener("keydown", (e)=>{
		const keyPressed = e.key;
		if(keyPressed <= "9" && keyPressed >= "0"){
			if(codes.length - 1 > idx){
				setTimeout(()=>codes[idx+1].focus(),100);
			}
		}
		else if(keyPressed === "Backspace"){
				if(idx > 0){
					setTimeout(()=>codes[idx-1].focus(),100);
				}
		}
	})
})

document.addEventListener('DOMContentLoaded', (event) => {
    const firstCodeInput = document.getElementById('code-1');
    if (firstCodeInput) {
        firstCodeInput.focus();
    }
});