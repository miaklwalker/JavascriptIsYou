
let array =[

    {
      "name": "",
      "x": 168,
      "y": 1007,
      "w": 24,
      "h": 25
    },
    {
      "name": "",
      "x": 167,
      "y": 1032,
      "w": 24,
      "h": 25
    },
    {
      "name": "",
      "x": 168,
      "y": 1056,
      "w": 24,
      "h": 24
    },
    {
      "name": "",
      "x": 96,
      "y": 936,
      "w": 24,
      "h": 25
    },
    {
      "name": "",
      "x": 96,
      "y": 960,
      "w": 24,
      "h": 25
    },
    {
      "name": "",
      "x": 96,
      "y": 984,
      "w": 24,
      "h": 25
    },
    {
      "name": "",
      "x": 647,
      "y": 791,
      "w": 24,
      "h": 25
    },
    {
      "name": "",
      "x": 647,
      "y": 815,
      "w": 24,
      "h": 25
    },
    {
      "name": "",
      "x": 647,
      "y": 839,
      "w": 24,
      "h": 25
    },
    {
      "name": "",
      "x": 359,
      "y": 791,
      "w": 24,
      "h": 25
    },
    {
      "name": "",
      "x": 360,
      "y": 815,
      "w": 24,
      "h": 25
    },
    {
      "name": "",
      "x": 359,
      "y": 839,
      "w": 24,
      "h": 25
    }
  ]
function Convert(Array){
	let SpriteSheet=[]
    Array.forEach(Sprite=>{
      SpriteSheet.push(`[${Sprite.x},${Sprite.y},${Sprite.w},${Sprite.h}]`)
	})
	console.log(SpriteSheet.join());
}
// Convert(array);


