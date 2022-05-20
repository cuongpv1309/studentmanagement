
const studentGetAll = async () => {

    const response = await fetch('http://localhost:8080/student');

    const myJson = await response.json();

    let list_student_html = ""

    let tbody = document.getElementById("list_student")

    tbody.innerHTML = ''

    for (let i = 0; i < myJson.length; ++i) {


        let kq = myJson[i].diemcc * 0.1 + myJson[i].diemkt * 0.2 + myJson[i].diemthi * 0.7

        list_student_html += "</tr>"

        list_student_html += "<td> " + myJson[i].firstname + "</td>"

        list_student_html += "<td> " + myJson[i].lastname + "</td>"

        list_student_html += "<td> " + myJson[i].email + "</td>"

        list_student_html += "<td> " + myJson[i].diemcc + "</td>"

        list_student_html += "<td> " + myJson[i].diemkt + "</td>"

        list_student_html += "<td> " + myJson[i].diemthi + "</td>"

        list_student_html += "<td> " + kq + "</td>"

        list_student_html += "<td>"

        list_student_html += "<a href =" + "'https://localhost:8080/student/edit/" + myJson[i].id + "/'" + " class = 'btn btn-primary'  > Update </a >"

        list_student_html += "<a class = 'btn btn-danger' onClick='handleDelete( " + myJson[i].id + ")' > Delete </a >"

        list_student_html += "</td>"


        list_student_html += "</tr>"
    }



    tbody.insertAdjacentHTML('beforeend', list_student_html);
}

studentGetAll()



const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:8080/student/delete/${id}`, {
        method: 'DELETE'
    })
    const myJson = await response.json();

    

    console.log(myJson)
    
}