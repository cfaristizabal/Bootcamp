class Operations
  attr_reader :a , :b
  def initialize (a,b)
    @a = a
    @b = b
  end

  def sum()
    self.a + self.b
  end
  def sub ()
    self.a - self.b
  end
  def mul ()
    self.a * self.b
  end
  def div ()
    self.a / self.b
  end
  def typ ()
    if self.a%2==0
      i = "par"
    else
      i = "impar"
    end
    if self.b%2==0
      j = "par"
    else
      j = "impar"
    end
    "a=#{a} es #{i} y b=#{b} es #{j}"
  end
end


num = Operations.new(3,4)

p num.sum
#p num.sub
p num.mul
p num.div
p num.typ