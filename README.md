# About me.

Hi, I'm Max. I hope you enjoyed my site. Let's get a few things out of the way first:

1.  This is my site's readme, I will write silly things like this list. 😵‍💫
2.  I'm a Full-Stack Software Engineer and love building software.
3.  I have a cat. He occasionally writes code by jumping on the keyboard, but his PR's always get declined. 😥
4.  You can contact me at [hello@maxmueller.miami](mailto:hello@maxmueller.miami).
5.  Flags are cool, so if Vexillology peaked your interest, look into joining [NAVA](https://www.nava.org).
6.  Fun fact: I hold 3 citizenships: 🇦🇷🇺🇸🇵🇱
7.  My favorite flag is [Zaire's Flag](https://www.crwflags.com/fotw/images/c/cd-zaire.gif)

# About you.

You're looking at my site because you're a flag lover, and _possibly_ a technical recruiter. Hence, I tried to integrate a bit of modern engineering practices with TypeScript + React for you to see. All my code is available in this same github repo.

# About my website.

- I bootstrapped this TypeScript app with [Create React App](https://create-react-app.dev/).
- I'm using [Theme-UI](https://theme-ui.com/) for theming.
- I'm getting the flag icons from [countryflags.io](https://www.countryflags.io/) for now. I plan to build my own API in the near future.

# Changelog.

I'll be versioning my site based on flags.

## v1.0.0 Zaire:

<p align='center'>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_Zaire_%281971%E2%80%931997%29.svg/1920px-Flag_of_Zaire_%281971%E2%80%931997%29.svg.png" alt="Zaire's Flag" width='50%'/>
</p>

Named after [Zaire](https://en.wikipedia.org/wiki/Zaire). I learned about this defunct country's flag in an old encyclopedia in my grandfather's home. The page looked something like [this](https://live.staticflickr.com/4001/4290551550_474fbb9086_b.jpg). It's only fitting, since this flag is what got me interested in Vexillology.

- Init dev and deployment of site.
- Themed with Theme-UI, themes are:
  - 🇦🇷, 🇧🇸, 🇨🇳, 🇮🇳, 🇮🇱, 🇮🇹, 🇯🇲, 🇯🇵, 🇶🇦, 🇿🇦, 🇺🇦, 🇺🇸 and Zaire (no emoji 😭).
- Use i18n to translate 'Hello' into multiple languages.
- Use <span>countryflags.io</span> for flag icons.
- My picture, resume, and LinkedIn profile.
- Guess the flag name v1.0.0
  1. Display a flag
  2. Ask for input in text box.
  3. Check if correct or not (string match).

# Planned Releases (List is always WIP).

## v2.0.0 Isle of Portland (Dec 2021)

<p align='center'>
<img src='https://www.flaginstitute.org/wp/wp-content/uploads/flags/UNKG7513.png' alt="Isle of Portland's Flag" width='50%'/>
</p>

Named after [Dr. Edgar F. Codd](https://en.wikipedia.org/wiki/Edgar_F._Codd)'s place of birth because this release deals with a lot of database stuff.

- Add themes for places I've traveled to and change my picture to a picture of me in that place.
- Create database (i.e. Firebase).

  - COUNTRY_NAME (string)
  - ISO_CODE (string) (KEY, also is flag id)
  - CONTINENT (string)
  - FLAG_COLOR_1 (string)
  - FLAG_COLOR_2 (nullable string)
  - FLAG_COLOR_3 (nullable string)
  - FLAG_COLOR_4 (nullable string)
  - FLAG_COLOR_5 (nullable string)
  - TRIBAND (boolean)
  - QUARTERED (boolean)
  - STRIPES (boolean)
  - CANTON (boolean)
  - CIRCLE (boolean)
  - CRESCENT (boolean)
  - CROSS (boolean)
  - DIAMOND (boolean)
  - STARS (boolean)
  - SUN (boolean)
  - TRIANGLE (boolean)
  - ANIMAL (boolean)
  - PLANT (boolean)
  - OBJECT (boolean)
  - INSCRIPTION (boolean)

- Create API for various calls.
- Guess the flag v2.0.0
  1. Display a flag
  2. Give a multiple choice option
  3. Give feedback i.e. "correct" or "incorrect"

## v2.1.4 Republic of Rose Island (Feb 2022)

<p align='center'>
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Rose_Island_Flag.svg/2560px-Rose_Island_Flag.svg.png' alt="Republic of Rose Island's Flag" width='50%'/>
</p>

Don't question my versioning - it just fits. This is a small update named after Giorgio Rosa's micronation, [The Republic of Rose Island](https://en.wikipedia.org/wiki/Republic_of_Rose_Island).

- Small chart with stats about flags using Ag-grid.
- Integrate either Ag-charts or Chartsjs to show data.
- Guess the flag v2.1.4
  - Add scoring (Correct / Incorrect / Out of x of flags)
