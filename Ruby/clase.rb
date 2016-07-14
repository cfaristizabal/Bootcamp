# class Person  #Siempre la clase empieza con mayúscula
#   def initialize(nombre,apellido,edad)  #Inicializa y crea los atributos de las clases
#     @nombre = nombre                    #Variables de instancia, es necesario asignar
#     @apellido = apellido                #las variables a los atributos
#     @edad = edad
#   end
#   def p_nombres                           #Crea un método
#       "Tu nombre es #{@nombre}"
#   end
#   def p_everything                        #Crea un método
#       "Tu nombre es #{@nombre} #{@apellido} y tu edad es #{@edad}"
#   end
# end



# x = Person.new("Cristian","Aristizabal",3) #Método contructor, crea el nuevo objeto
# y = Person.new("assadf","sdagf",4)

# p x.p_everything
# p y.p_everything



# class Person  #Siempre la clase empieza con mayúscula
#   attr_reader :nombre                   #atributo para leer sin necesidad de un metodo nuevo
#   attr_writer :nombre
#   def initialize(nombre,apellido,edad)  #Inicializa y crea los atributos de las clases
#     @nombre = nombre                    #Variables de instancia, es necesario asignar
#     @apellido = apellido                #las variables a los atributos
#     @edad = edad
#   end
# end

# # x = Person.new("Cristian","Aristizabal",3) #Método contructor, crea el nuevo objeto
# # y = Person.new("assadf","sdagf",4)
# p x
# p y

class Person  #Siempre la clase empieza con mayúscula
  attr_accessor :calle , :carrera, :numero                   #variable auxiliar
  attr_reader :nombre ,:apellido , :edad , :direccion
  attr_writer :direccion
  def union (p)
    self.direccion = p
  end

  def initialize(nombre,apellido,edad,direccion)  #Inicializa y crea los atributos de las clases
    @nombre = nombre                    #Variables de instancia, es necesario asignar
    @apellido = apellido                #las variables a los atributos
    @edad = edad
    @direccion = direccion
  end
end

y={calle: "30",carrera: "50", numero: "20"}
x = Person.new("Cristian","Aristizabal",3,"otro") #Método contructor, crea el nuevo objeto
puts x.union(y)
p x.nombre
p x.apellido
p x.edad
p x.direccion

