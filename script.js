

const add = document.querySelector('#add');
const courseCode = document.querySelector('#course-code');
const unitLoad = document.querySelector('#unit-load');
const grade = document.querySelector('#grade');
const tbody = document.querySelector('#tbody');
const tfoot = document.querySelector('#tfoot');
const table = document.querySelector('#table');
const calcGp = document.querySelector('#calc-gp');
const clear = document.querySelector('#clear');
let gpArry = [];



add.addEventListener('click', ()=>{

if(courseCode.value === '' || unitLoad.value <= 0 || grade.selectedIndex=== 0)
{
    alert('Please input a value')
}
else{
    const tr = document.createElement('tr');
    const tdCourseCode = document.createElement('td');
    tdCourseCode.innerHTML = courseCode.value;
    const tdUnitLoad = document.createElement('td');
    tdUnitLoad.innerHTML = unitLoad.value;
    const tdGrade = document.createElement('td');
    tdGrade.innerHTML = grade.options[grade.selectedIndex].text;
    tr.appendChild(tdCourseCode);
    tr.appendChild(tdUnitLoad);
    tr.appendChild(tdGrade);
    tbody.appendChild(tr); 
   table.classList.remove('d-none');
   calcGp.classList.remove('d-none');
   clear.classList.remove('d-none');
   gpArry.push({'unitLoad': unitLoad.value, 'grade': grade.options[grade.selectedIndex].value } )
   courseCode.value = "";
   unitLoad.value = "";
   grade.selectedIndex = "0";
}
 
})

calcGp.addEventListener('click',()=> {
let unitLoads = 0,
productOfUnitLoadAndGrades = 0,
SumOfproductOfUnitLoadAndGrades = 0;

gpArry.forEach(result =>{
unitLoads += parseInt(result.unitLoad);
productOfUnitLoadAndGrades = parseInt(result.unitLoad ) * parseInt(result.grade);
SumOfproductOfUnitLoadAndGrades += productOfUnitLoadAndGrades;

});

const tr = document.createElement('tr');
tdTotalUnitLoad = document.createElement('td');
tdTotalUnitLoad.innerHTML = ` total unit load is ${unitLoads}`

tdGpa = document.createElement('td');
tdGpa.setAttribute('colspan', '2');
tdGpa.innerHTML = `your GPA is ${( SumOfproductOfUnitLoadAndGrades / unitLoads).toFixed(2)}`;

tr.appendChild(tdTotalUnitLoad);
tr.appendChild(tdGpa);
tfoot.appendChild(tr);


})

clear.addEventListener('click',() =>{
    gpArry = [];
    tbody.querySelectorAll('*').forEach(child => child.remove());
if( tfoot.querySelector('tr') !== null){
    tfoot.querySelector('tr').remove();
}

    

    table.classList.add('d-none');
    calcGp.classList.add('d-none');
    clear.classList.add('d-none');
})


