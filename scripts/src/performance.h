#include <nan.h>


#ifndef PERF_ANALYZE
#define PERF_ANALYZE

namespace PERF {

	/**
	* TODO: Design class structure 
	*/
	class Performance {

	};

	void Perf(const Nan::FunctionCallbackInfo<v8::Value>& info) {

		// Not really relevant - just playing around with some code to get a feel for addons atm
		if (info.Length() < 2) {
			Nan::ThrowTypeError("Wrong number of arguments");
			return;
		}

		if (!info[0]->IsNumber() || !info[1]->IsNumber()) {
			Nan::ThrowTypeError("Both arguments should be numbers");
			return;
		}

		double arg0 = info[0]->NumberValue();
		double arg1 = info[1]->NumberValue();
		v8::Local<v8::Number> num = Nan::New(pow(arg0, arg1));

		info.GetReturnValue().Set(num);
	}

}

#endif /* PERF_ANALYZE */