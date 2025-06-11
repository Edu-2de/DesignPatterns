class Call_The_Roll:
      _instance = None

      def __new__(cls, *args, **kwargs):
            if cls._instance is None:
                  cls._instance = super().__new__(cls)
            return cls._instance
      
      def add_student(self, student_name):
            if not hasattr(self, '_students'):
                  self._students = []
            elif student_name in self._students:
                  return "Aluno já cadastrado."
            self._students.append(student_name)

      def verification(self):
            if not hasattr(self, '_students') or len(self._students) == 0:
                  return "Nenhum aluno cadastrado."
            return "Alunos cadastrados com sucesso."

      def call_roll(self):
            if len(self._students) > 0:
                  for student in self._students:
                        return (f"Chamando: {student}")
            return "Nenhum aluno cadastrado."
      
      def delete_student(self, student_name):
            verification = self.verification()
            if verification != "Alunos cadastrados com sucesso.":
                  return verification
            self._students.remove(student_name)
            return "Aluno removido com sucesso."
      

      def list_students(self):
            verification = self.verification()
            if verification != "Alunos cadastrados com sucesso.":
                  return verification
            return f"Alunos cadastrados: {', '.join(self._students)}"
      
      def putch_student(self, student_name, new_name):
            verification = self.verification()
            if verification != "Alunos cadastrados com sucesso.":
                  return verification
            if student_name not in self._students:
                  return "Aluno não cadastrado."
            for student in self._students:
                  if student == student_name:
                        self._students[self._students.index(student)] = new_name
                        return f"Aluno {student} alterado para {new_name}."
            return "Aluno não encontrado."


a = Call_The_Roll()
b = Call_The_Roll()



a.add_student("Maria")
a.add_student("Joao")

a.delete_student("Joao")

print(a.list_students()) 

b.add_student("Maria")
b.add_student("Joao")
 # Vai mostrar só Maria
print(b.list_students())  # Também vai mostrar só Maria
print(a.list_students()) 