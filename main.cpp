#include <iostream>
#include <string>

using namespace std;

extern "C" {
  
  void showName(char* name) {
    cout << name << endl;
  }

}