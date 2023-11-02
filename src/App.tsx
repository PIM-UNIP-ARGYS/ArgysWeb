import ScrollTop from './components/ScrollTop';
import ThemeRoutes from './routes';
import ThemeCustomization from './themes';

function App() {
  return (
    <ThemeCustomization>
      <ScrollTop>
        <ThemeRoutes />
      </ScrollTop>
    </ThemeCustomization>
  );
}

export default App;
