#include <iostream>
#include <string>

extern "C" {
  int myFunction(int a, int b) {
    return a + b;
  }

  char hui() {
    return 'a';
  }
}