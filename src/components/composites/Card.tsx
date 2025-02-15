import { CardContent, Card as MuiCard, Typography } from "@mui/material";

export interface ICard {
  icon: any;
  label: string;
  value: number | string;
}

const Card = ({ icon, label, value }: ICard) => {
  return (
    <>
      <MuiCard
        className="w-full !bg-green-primary text-white shadow-md px-4 py-2 !rounded-lg"
        sx={{ minWidth: 150 }}
      >
        <CardContent className="flex space-x-3 text-white">
          <div>{icon}</div>
          <div>
            <Typography variant="body2" className="text-white">
              {label}
            </Typography>
            <Typography variant="h4" className="font-semibold !mt-2 text-white">
              {value}
            </Typography>
          </div>
        </CardContent>
      </MuiCard>
    </>
  );
};

export default Card;
