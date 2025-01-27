// // DOM
// const tipedriver = document.getElementById('tipedriver')
// console.log(tipedriver)

// // trigger
// tipedriver.addEventListener('change', function(e){
//     console.log(e.target.value)
// })


// // DOM
// const tanggal = document.getElementById('tanggal')
// console.log(tanggal)

// // trigger
// tanggal.addEventListener('change', function(e){
//     console.log(e.target.value)
// })


// // DOM
// const time = document.getElementById('time')
// console.log(time)

// // trigger
// time.addEventListener('change', function(e){
//     console.log(e.target.value)
// })


// // DOM
// const number = document.getElementById('number')
// console.log(number)

// // trigger
// number.addEventListener('change', function(e){
//     console.log(e.target.value)
// })


// // DOM
// const submit = document.getElementById('submit')
// console.log(number)

// // trigger
// submit.addEventListener('change', function(e){
//     console.log(e.target.value)
// })




// DOM
const tipedriverEl = document.getElementById('tipedriver')
const tanggalEl = document.getElementById('tanggal')
const jamEl = document.getElementById('jam')
const penumpangEl = document.getElementById('penumpang')
const cariEl = document.getElementById('cari')

const inputData = {
    tipedriver: '',
    tanggal: '',
    waktu: '',
    jumlahPenumpang: ''
}

// trigger
cariEl.addEventListener('click', function(e){
    inputData.tipedriver = tipedriverEl.value
    inputData.tanggal = tanggalEl.value
    inputData.waktu = jamEl.value
    inputData.jumlahPenumpang = penumpangEl.value
    
    getData(inputData)
})

async function getData(inputData){
    let itemHtml;
    const getCars = await fetch('https://api-car-rental.binaracademy.org/customer/car')
    const result = await getCars.json()
    const data = Binar.populateCars(result)

    const filteredData = data.filter(function(e){
        return e.typeDriver === inputData.tipedriver
    })
    
    filteredData.forEach(element => {
        itemHtml += `
            <div class='col-4'>
                <img class="img-fluid" src="${element.image}" />
                <h3>${element.name}</h3>
            </div>
        `
    })
    
    document.getElementById('searchresult').innerHTML = itemHtml

}
