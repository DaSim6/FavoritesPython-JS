fav_songs = ["Let it be", 
              "Vivir lo nuestro", 
              "Hard to say I'm sorry", 
              "Wish you were here"]
print(fav_songs[0])
print(fav_songs[1])
print(fav_songs[2])
print(fav_songs[3])
print(fav_songs)

fav_songs.append("Wind of change")
fav_songs.sort()
print("My " + str(len(fav_songs)) + " favorite songs are: ")  
print(fav_songs)

fav_songs.pop(3)
fav_songs.reverse()
print("In fact, my " + str(len(fav_songs)) + " favorite songs are: ") 
print(fav_songs)

