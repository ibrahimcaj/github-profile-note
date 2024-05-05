# github-profile-note

<span>
    <img width="350px" src="https://github-profile-note.vercel.app/?text=ever%20wanted%20toadd%20sticky\nnotes%20to%20your%20repos%2Fprofile?&color=green" />
    <img width="350px" src="https://github-profile-note.vercel.app/?text=now%20you%20can!\nyou%20can%20also\ncustomize%20the%20note%20svg%20fill!&color=purple&rotation=-3" />
</span>

<span>
    <img width="350px" src="https://github-profile-note.vercel.app/?text=build:%20just\nclone%20and\ninstall%20deps\nprs:%20open!&color=pink&rotation=8" />
    <img width="350px" src="https://github-profile-note.vercel.app/?text=TODO:\nadd%20font%20size%20parameter&rotation=-12" />
</span>

## Usage:
### Parameters:
- `text`* : *string*
  - The text that will be shown on the sticky note, will be cut off due to space constraints.
- `color` : *string* (default: `yellow`)
  - Can be either one of the predefined colors (yellow, green, blue, purple, pink or red)
- `rotation` : *number* (default: `10`)
  - The rotation of the sticky note. Value is represented in degrees.
 
*\* - required parameter*

### Example
[`https://github-profile-note.vercel.app/?text=hello%20world!\n:)&color=pink&rotation=8`](https://github-profile-note.vercel.app/?text=hello%20world!\n:)&color=pink&rotation=8)

<img width="350px" src="https://github-profile-note.vercel.app/?text=hello%20world!\n:)&color=pink&rotation=8" />

To specify the size of the sticky note, use an `<img>` tag with the width attribute.
```markdown
<img width="350px" src="https://github-profile-note.vercel.app/?text=hello%20world!\n:)&color=pink&rotation=8" />
```

## License:
This project is licensed under the [MIT license](https://github.com/ibrahimcaj/github-profile-note/blob/main/LICENSE).
