// mas info: https://platzi.com/clases/2332-javascript-poo/55783-playgrounds-sobrescribir-metodos-heredados/

class Comment {
    constructor({ content, studentName, studentRole = "estudiante" }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar() {
        const comentario = {
            studentName: this.studentName + " (" + this.studentRole + ")",
            likes: this.likes + " likes",
            content: this.content,
        };
        return comentario;
    }
}

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

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        return comment.publicar();
    }
}

class TeacherStudent extends Student {
    // Tu código aquí 👈
    constructor(props, skills = []) {
        super(props);
        this.skills = skills;
    }
    publicarComentario(commentContent) {
        const comment = new Comment({
            studentRole: `profesor de ${this.skills.join(",")}`,
            studentName: this.name,
            content: commentContent,
        });
        return comment.publicar();
    }
}
