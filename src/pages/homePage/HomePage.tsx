import themes from "../../styles/themes.module.scss";
import { router } from "../../router";
import { Button } from "../../shared/Button";

const HomePage: React.FC = () => {
  return (
    <div className="p-6">
      <h1
        style={{ color: themes.accentError }}
        className="text-3xl font-bold text-center mb-4"
      >
        Choose Your Game!
      </h1>
      <div className="flex flex-col gap-8">
        <Button
          type={"button"}
          variant={"bigButton"}
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
