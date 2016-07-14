class Song
  attr_reader :name, :artist, :duration
  def initialize(name,artist,duration)
    @name = name
    @artist = artist
    @duration = duration
  end
end

class Karaoke < Song
  attr_reader :lyric
  def initialize(name, lyric)
    super(name) #Llama los atributos de la clase padre
    @lyric  = lyric
  end
end

x = Karaoke.new("Yo","fhajajkafhjakhfaf")
#p x.inspect
p x.name
