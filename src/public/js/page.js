// Var the p tag with the class ip
let ip = document.getElementsByClassName('ip')[0].innerHTML

ip = ip.replace('IP: ', '').replace(' ', '')

// ip to string
ip = ip.toString()

// const button = document.getElementsByClassName('ubicacion')[0]

function playpause () {
  const vid = document.getElementById('vid')

  const p_id = document.getElementsByClassName('masthead__subtitle')[0]

  // Make visible the video
  vid.style.display = 'block'
  vid.play()
  document.getElementById('playpause').innerHTML =
    'Ahora si, esta es tu verdadera Info'
  // Remove Masterhead class and add Masterhead-video class
  document
    .getElementsByClassName('masthead')[0]
    .classList.add('masthead-video')
  document.getElementsByClassName('masthead')[0].classList.remove('masthead')
  // Remove Neon-button class and add Neon-button-video class
  document.getElementById('playpause').classList.add('neon-button-video')
  document.getElementById('playpause').classList.remove('neon-button')

  // Make a loop to edit meta title tag
  const title = document.getElementsByTagName('title')[0]

  const texts = [
    {
      time: 0,
      text: '*Music*'
    },
    {
      time: 18.8,
      text: "We're no strangers to love"
    },
    {
      time: 22.6,
      text: 'You know the rules and so do I'
    },
    {
      time: 27.2,
      text: "A full commitment's what I'm thinking of"
    },
    {
      time: 31.1,
      text: "You wouldn't get this from any other guy"
    },
    {
      time: 35.1,
      text: "I just wanna tell you how I'm feeling"
    },
    {
      time: 40.2,
      text: 'Gotta make you understand'
    },
    {
      time: 43,
      text: 'Never gonna give you up'
    },
    {
      time: 45,
      text: 'Never gonna let you down'
    },
    {
      time: 47.3,
      text: 'Never gonna run around and desert you'
    },
    {
      time: 51.3,
      text: 'Never gonna make you cry'
    },
    {
      time: 53.8,
      text: 'Never gonna say goodbye'
    },
    {
      time: 55.9,
      text: 'Never gonna tell a lie and hurt you'
    },
    {
      time: 60.7,
      text: "We've known each other for so long"
    },
    {
      time: 64.7,
      text: "Your heart's been aching but"
    },
    {
      time: 66.5,
      text: "You're too shy to say it"
    },
    {
      time: 69.1,
      text: "Inside we both know what's been going on"
    },
    {
      time: 73.5,
      text: "We know the game and we're gonna play it"
    },
    {
      time: 77.5,
      text: "And if you ask me how I'm feeling"
    },
    {
      time: 82.4,
      text: "Don't tell me you're too blind to see"
    },
    {
      time: 85.4,
      text: 'Never gonna give you up'
    },
    {
      time: 87.4,
      text: 'Never gonna let you down'
    },
    {
      time: 89.5,
      text: 'Never gonna run around and desert you'
    },
    {
      time: 93.8,
      text: 'Never gonna make you cry'
    },
    {
      time: 95.7,
      text: 'Never gonna say goodbye'
    },
    {
      time: 98,
      text: 'Never gonna tell a lie and hurt you'
    },
    {
      time: 102,
      text: 'Ya me aburri'
    },
    {
      time: 212,
      text: 'Ya me aburri'
    }
  ]

  let i = 0

  setInterval(() => {
    // Round the time to 1 decimal
    const time = Math.round(vid.currentTime * 10) / 10

    if (time >= texts[i].time) {
      // Change the title
      title.innerHTML = texts[i].text
      // Increment the index
      i++

      if (i >= texts.length) {
        i = 0
      }

      if (i >= 2) {
        // Change the text of the p with the class mastead__subtitle
        p_id.innerHTML = `IP: ${texts[i - 1].text}`
        const window_width = window.innerWidth
        const window_height = window.innerHeight
        const random_left =
          Math.floor(Math.random() * (window_width - 1 + 1)) + 1
        const random_top =
          Math.floor(Math.random() * (window_height - 1 + 1)) + 1
        const params =
        `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=300,height=80,left=${random_left},top=${random_top}`
        setTimeout(() => {
          const newWin = window.open('about:blank', texts[i - 1].text, params)
          newWin.document.write(texts[i - 1].text)
        }, 100)
      }
    }
  }, 100)

  document.getElementById('playpause').onclick = function () {
    // Open new tab
    window.open(`/info/${ip}`, '_blank')
  }
}

function myConfirmation () {
  return 'Are you sure you want to quit?'
}

// If the user use secondary click, dont show the options
document.addEventListener('contextmenu', function (e) {
  e.preventDefault()
})
