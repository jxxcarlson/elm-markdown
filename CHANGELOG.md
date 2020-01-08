# Changelog

## January 7, 2019

- In `Blocktype.elm,` change the indentation parameter from 3 to 
4 to comply with standards

    ```elm
    level : Line -> Int
    level ln =
        run numberOfLeadingBlanks ln
            |> Result.toMaybe
            |> Maybe.map (\l -> l // 4)
            |> Maybe.withDefault 0
    ``` 
  
  
- Change css for better list display

- Use !important so that .mm-quotation overrides margin setting.

- In ElmWithID.marginOfLevel, set multiplier to zero (TODO:
issues to review.)
