console.log("Hello");
//checker.addEventListener('click', () => textInput.setAttribute("disabled", false););

function toggleTextArea(){
    var textInput = document.getElementById("textInput");
    textInput.disabled = !textInput.disabled;
    textInput.focus();
}


class BulmaModal {
	constructor(selector) {
		this.elem = document.querySelector(selector)
		this.close_data()
	}

	show() {
		this.elem.classList.toggle('is-active')
		this.on_show()
	}

	close() {
		this.elem.classList.toggle('is-active')
		this.on_close()
	}

	close_data() {
		var modalClose = this.elem.querySelectorAll("[data-bulma-modal='close'], .modal-background")
		var that = this
		modalClose.forEach(function(e) {
			e.addEventListener("click", function() {

				that.elem.classList.toggle('is-active')

				var event = new Event('modal:close')

				that.elem.dispatchEvent(event);
			})
		})
	}

	on_show() {
		var event = new Event('modal:show')

		this.elem.dispatchEvent(event);
	}

	on_close() {
		var event = new Event('modal:close')

		this.elem.dispatchEvent(event);
	}

	addEventListener(event, callback) {
		this.elem.addEventListener(event, callback)
	}
}

var btn = document.querySelector("#btn")
var mdl = new BulmaModal("#myModal")

btn.addEventListener("click", function () {
	mdl.show()
})

mdl.addEventListener('modal:show', function() {
    const final_greeting = "<br><br>Thanks so much for the opportunity. Looking forward to hearing back from you." + "<br><br>Regards,<br>Fahim Faisal";
    var email = document.getElementById("email").value;
    var company = document.getElementById("company").value;
    var position = document.getElementById("position").value;
    var additional_data = document.getElementById("textInput").value;
    if (additional_data.length === 0){
        console.log("No additional data")
        var msg_body = `<strong>To: ${email}</strong><br><br>Hello, I am Fahim Faisal applying for the position ${position} at ${company}.<br><br>I have attached my CV below and I have my online portfolio here: https://fahim.tech${final_greeting}`
    }
    else {
        console.log("has addiitonal adata")
        var msg_body = `<strong>To: ${email}</strong><br><br>Hello, I am Fahim Faisal applying for the position ${position} at ${company}.<br>${additional_data}<br><br>I have attached my CV below and I have my online portfolio here: https://fahim.tech${final_greeting}`
    }
    document.getElementById("modal-data").innerHTML = msg_body;
	console.log("opened")
})

mdl.addEventListener("modal:close", function() {
	console.log("closed")
})

