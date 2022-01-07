/* eslint-disable react/react-in-jsx-scope */
import './App.css';

function App() {
  return (
    <div className="">
      <div className="w-full text-center flex h-full flex-col bg-gradient-to-t from-indigo-500 via-indigo-700 to-blue-900 text-white px-8">
        <img
          className="md:mt-10 sm:mt-4 m-auto mb-2"
          style={{ width: 230 }}
          src="/img/logo1.png"
          alt="Man looking at item at a store"
        />

        <div className="p-3 mb-12">
          <p className="block mt-1 md:text-5xl sm:text-4xl leading-tight font-semibold pt-14 pb-7 tracking-wider">
            ¿PARA QUE UNA SI LAS PUEDES TENER TODAS?
          </p>
          <p className="mt-2 sm:text-xl">
            PlayStation, Wii, Game Boy Advance, Super Nintendo, Sega Dreamcast y más...
          </p>
        </div>

        <div className="p-6 mb-16">
          <button type="button" className="btn-blue sm:p-4 md:m-auto md:text-lg">
            OBTENER AHORA!
          </button>
        </div>
      </div>

      <br />

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="/img/zamurai.jpeg"
              alt="Man looking at item at a store"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Case study
            </div>
            <a
              href="##"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Finding customers for your new business
            </a>
            <p className="mt-2 text-gray-500">
              Getting a new business off the ground is a lot of hard work. Here are five ideas you
              can use to find your first customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
