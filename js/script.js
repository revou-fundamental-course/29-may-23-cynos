const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "=";
    } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "x";
    }
}

/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);

document.querySelector(".welcome-text-1 span").innerHTML = "Setia"

// submit form
const submit = document.querySelector("#input_submit")

function submitFunction(event) {
    event.preventDefault()
    const input_nama = document.querySelector("#input_nama").value
    const input_tanggal_lahir = document.querySelector("#input_tanggal_lahir").value
    const input_jenis_kelamin = document.querySelector("#input_jenis_kelamin").value
    const input_pesan = document.querySelector("#input_pesan").value
    if (input_nama == "") {
        alert("input nama tidak boleh kosong")
        return
    }
    if (input_tanggal_lahir == "") {
        alert("input tanggal lahir tidak boleh kosong")
        return
    }
    if (input_jenis_kelamin == "") {
        alert("input jenis kelamin tidak boleh kosong")
        return
    }
    if (input_pesan == "") {
        alert("input pesan tidak boleh kosong")
        return
    }
    document.getElementById("current_time").innerHTML = new Date()
    document.getElementById("nama").innerHTML = input_nama
    document.getElementById("tanggal_lahir").innerHTML = input_tanggal_lahir
    document.getElementById("jenis_kelamin").innerHTML = input_jenis_kelamin
    document.getElementById("pesan").innerHTML = input_pesan
}

submit.addEventListener("click", submitFunction)