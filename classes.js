// Comentarios
class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar() {
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.likes + " likes");
        console.log(this.content);
    }
}



// Clases
function videoPlay(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se está reproduciendo desde la url " + urlSecreta);
}
function videoStop(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
}

class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir() {
        videoPlay(this.videoID);
    }
    pausar() {
        videoStop(this.videoID);
    }
}




// Cursos
class Course {
    #name

    constructor({
        id = '',
        name,
        teacher = '',
        lessons = [],
        isFree = false,
        lang = 'spanish'
    }) {
        this.id = id;
        this.#name = name;
        this.teacher = teacher;
        this.lessons = lessons;
        this.isFree=isFree;
        this.lang=lang
    }

    get name() {
        return this.#name;
    }
    set name(newName) {
        this.#name = newName;
    }
}
const programacionBasica = new Course({
    id: 1,
    name: 'Curso Gratis de Programación Básica',
    teacher: 'Team Platzi',
    isFree: true
})
const definitivoHTMLyCSS = new Course({
    id: 2,
    name: 'Curso Definitivo de HTML y CSS',
    teacher: 'Diego de Granda',
    lang: 'english'
})
const promptEngineering = new Course({
    id: 3,
    name: 'Curso de Prompt Engineerig con ChatGPT',
    teacher: 'Juan Alarcon'
})

// Rutas de aprendizaje
class LearningPath {
    #id

    constructor({
        id,
        name,
        courses = []
    }) {
        this.#id = id
        this.name = name
        this.courses = courses
    }

    get id() {
        return this.#id;
    }
    set id(newId) {
        this.#id = newId;
    }

    addCourse(course) {
        this.courses.push(course)
    }
    replaceCourse(oldcourse, newCourse) {
        let index = this.courses.findIndex((course) => course === oldcourse)
        this.courses.splice(index, 1, newCourse)
    }
    deleteCourse(id) {
        let index = this.courses.findIndex((course) => course.id === id)
        this.courses.splice(index)
    }
}

const escuelaWeb = new LearningPath({
    id: 1,
    name: 'Desarrollo web',
    courses: [
        programacionBasica,
        definitivoHTMLyCSS
    ]
});
const escuelaData = new LearningPath({
    id: 2,
    name: 'Ciencia de Datos',
    courses: [
        promptEngineering
    ]
});


// Estudiantes
class Student {
    #email

    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.#email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
    get email() {
        return this.#email;
    }
    set email(newEmail) {
        this.#email = newEmail;
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
        content: commentContent,
        studentName: this.name,
        });
        comment.publicar();
    }
}
class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        if (newCourse.isFree) {
        this.approvedCourses.push(newCourse);
        } else {
        console.warn(
            "Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos"
        );
        }
    }
}
class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        if (newCourse.lang !== "english") {
        this.approvedCourses.push(newCourse);
        } else {
        console.warn(
            "Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés"
        );
        }
    }
}
class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }
    approveCourse(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

const juan2 = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [escuelaWeb],
});

const miguelito2 = new BasicStudent({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [escuelaWeb, escuelaData],
});

// Profesores
class Teacher {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        Courses = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.Courses = Courses;
    }
    crearCurso(courseName, id) {
        const newCourse = new Course({
            id: id,
            name: courseName,
            teacher: this.name
        })
    }
}
class TeacherStudent extends Student {
    constructor(props) {
    super(props);
    }

    approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent) {
    const comment = new Comment({
        content: commentContent,
        studentName: this.name,
        studentRole: "profesor",
    });
    comment.publicar();
    }
}

const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "f@gep.com",
    instagram: "freddiervega",
});
// 