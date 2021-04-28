// const allBtn = document.querySelector('.all-btn');
// const cakesBtn = document.querySelector('.cakes-btn');
// const cupcakesBtn = document.querySelector('.cupcakes-btn');
// const sweetsBtn = document.querySelector('.sweets-btn');
// const doughnutsBtn = document.querySelector('.doughnuts-btn');

(function(){
    const buttons = document.querySelectorAll('.btn')
    const storeItems = document.querySelectorAll('.box')
    console.log(buttons)
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            //prevent the default link jump to top of page
            e.preventDefault()
            //grab the filter button that was clicked
            const filter = e.target.dataset.filter
            if (filter === 'all'){
                //show all items
                storeItems.forEach(function(item){
                    item.style.display = 'block'
                })
            } else if (filter === 'cakes'){
                storeItems.forEach(function(item){
                    if (item.classList.contains('cakes')){
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                })
            } else if (filter === 'cupcakes'){
                storeItems.forEach(function(item){
                    if (item.classList.contains('cupcakes')){
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                })
            } else if (filter === 'sweets'){
                storeItems.forEach(function(item){
                    if (item.classList.contains('sweets')){
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                })
            } else if (filter === 'doughnuts'){
                storeItems.forEach(function(item){
                    if (item.classList.contains('doughnuts')){
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                })
            }
        })
        
    })
})();

(function(){

    const searchBox = document.querySelector('.search-text')
    const storeItems = document.querySelectorAll('.box')

    searchBox.addEventListener('keyup', (e) => {
    
        const searchFilter = e.target.value.toLowerCase().trim()
        //display only items that contain filter input

        storeItems.forEach((item) => {
            if (item.textContent.includes(searchFilter)){
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    })

})();



function() {
    const rightbtn = document.createElement('button');
    const leftbtn = document.createElement('button');
}
