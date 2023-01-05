const testObject = {
  test1: null,
  test2: undefined,
  test3: "",
  test4: "string",
  // test5: null, // Obj does not have property test5
};

function tests1(obj) {
  if (obj.test1) {
    console.log(true);
  } else {
    console.log(false);
  }

  if (obj.test2) {
    console.log(true);
  } else {
    console.log(false);
  }

  if (obj.test5) {
    console.log(true);
  } else {
    console.log(false);
  }

  if (obj.test4) {
    console.log(true);
  } else {
    console.log(false);
  }

  if (obj.test5) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function tests2(obj) {
  if (obj.hasOwnProperty("test1")) {
    console.log(true);
  } else {
    console.log(false);
  }

  if (obj.hasOwnProperty("test5")) {
    console.log(true);
  } else {
    console.log(false);
  }
}

tests1(testObject);
tests2(testObject);
