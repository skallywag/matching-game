import themes from "../../styles/themes.module.scss";
import { router } from "../../router";
import { Button } from "../../shared/Button";

const HomePage: React.FC = () => {
  return (
    <div style={{ color: themes.primaryBlue }}>
      <h1>Choose Your Game!</h1>
      <div>
        <Button
          type={"button"}
          text={"Memory Game"}
          onClick={() => router.navigate("/memory-game").catch(console.error)}
        />
        <Button
          text={"Quiz Game"}
          type="button"
          onClick={() => router.navigate("/quiz-game").catch(console.error)}
        />
      </div>
    </div>
  );
};

export { HomePage };
