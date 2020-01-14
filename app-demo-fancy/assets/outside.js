// OUTSIDE

app.ports.infoForOutside.subscribe(msg => {

    console.log("app.ports.infoForOutside")

    switch(msg.tag) {

        case "AskForClipBoard":
        console.log("AskForClipBoard")

        navigator.clipboard.readText()
          .then(text => {
            console.log('Clipboard (outside):', text);
            app.ports.infoForElm.send({tag: "GotClipboard", data:  text})
          })
          .catch(err => {
            console.error('Failed to read clipboard: ', err);
          });


        break;

        case "WriteToClipboard":
            console.log("WriteToClipboard", JSON.stringify(msg.data))

            navigator.permissions.query({name: "clipboard-write"}).then(result => {
              if (result.state == "granted" || result.state == "prompt") {
                updateClipboard(JSON.stringify(msg.data))
              }
            });

        break;

    }


    function updateClipboard(newClip) {
      navigator.clipboard.writeText(newClip).then(function() {
        console.log("Wrote to clipboard");
      }, function() {
        console.log ("Clipboard write failed");
      });
    }

})


