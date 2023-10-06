// Cursos
class Course {
    constructor({
        id = '',
        name,
        teacher = '',
        lessons = [],
    }) {
        this.id = id;
        this.name = name;
        this.teacher = teacher;
        this.lessons = lessons;
    }
}
const programacionBasica = new Course({
    id: 1,
    name: 'Curso Gratis de Programación Básica',
    teacher: 'Team Platzi'
})
const definitivoHTMLyCSS = new Course({
    id: 2,
    name: 'Curso Definitivo de HTML y CSS',
    teacher: 'Diego de Granda'
})
const promptEngineering = new Course({
    id: 3,
    name: 'Curso de Prompt Engineerig con ChatGPT',
    teacher: 'Juan Alarcon'
})

// Rutas de aprendizaje
class LearningPath {
    constructor({
        id,
        name,
        courses = []
    }) {
        this.id = id
        this.name = name
        this.courses = courses
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
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [escuelaWeb],
});

const miguelito2 = new Student({
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

// 