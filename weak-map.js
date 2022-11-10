
      let weakMapForX = new WeakMap();
      function setWeakMap(){
        let x = {
            'test-prop-1':'value 1',
            'test-prop-2':'value 2',
            'test-prop-3':'value 3'
          };
          console.log(x)
          weakMapForX.set(x,{
            'test-extn-prop-1':'value 1-ext',
            'test-extn-prop-2':'value 2-ext',
            'test-extn-prop-3':'value 3-ext',
          })
          console.log(weakMapForX)
        //   this will clear x object
          x = null;
          console.log(x)
      }
      setWeakMap();
      console.log(weakMapForX) 
    