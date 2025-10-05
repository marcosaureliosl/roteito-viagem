import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import React from "react";
import { useNavigate } from "react-router-dom";

// Assets
import orlandoImage from "../assets/orlando-skyline.webp";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const startDate = new Date("2025-11-20");
  const endDate = new Date("2025-12-04");

  const formattedTripPeriod = `${format(startDate, "dd/MM/yyyy")} a ${format(
    endDate,
    "dd/MM/yyyy"
  )}`;
  const daysUntilTrip = Math.ceil(
    (startDate.getTime() - new Date().getTime()) / (1000 * 3600 * 24)
  );

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: 300,
          borderRadius: 2,
          overflow: "hidden",
          mb: 4,
          boxShadow: 3,
        }}
      >
        <Box
          component="img"
          src={orlandoImage}
          alt="Orlando Theme Parks - Castelo da Disney, Globo da Universal, Orca do SeaWorld, montanhas-russas, fogos de artifício e palmeiras em atmosfera mágica noturna"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.7)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            p: 4,
            color: "white",
            background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            fontWeight="bold"
            gutterBottom
          >
            Roteiro de Viagem - Orlando 2025
          </Typography>
          <Typography variant="h6" component="p">
            {formattedTripPeriod} • {daysUntilTrip} dias até a viagem
          </Typography>
        </Box>
      </Box>

      {/* Quick Stats */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 3,
          mb: 4,
        }}
      >
        {/* Card Duração */}
        <Card sx={{ height: "100%", borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              Duração
            </Typography>
            <Typography variant="h4" component="div">
              15 dias
            </Typography>
            <Typography variant="body2">De 20/11 a 04/12/2025</Typography>
          </CardContent>
        </Card>

        {/* Card Parques Incluídos */}
        <Card sx={{ height: "100%", borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              Parques Incluídos
            </Typography>
            <Typography variant="h4" component="div">
              7+
            </Typography>
            <Typography variant="body2">
              Disney, Universal, SeaWorld e mais
            </Typography>
          </CardContent>
        </Card>

        {/* Card Próximo Evento */}
        <Card sx={{ height: "100%", borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              Próximo Evento
            </Typography>
            <Typography variant="h5" component="div">
              Chegada em Miami
            </Typography>
            <Typography variant="body2">
              {format(startDate, "EEEE, d 'de' MMMM", { locale: ptBR })} às
              17:00
            </Typography>
          </CardContent>
        </Card>

        {/* Card Ver Roteiro */}
        <Card
          sx={{
            height: "100%",
            borderRadius: 2,
            boxShadow: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
            textAlign: "center",
            cursor: "pointer",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "translateY(-4px)",
            },
          }}
          onClick={() => navigate("/day/1")}
        >
          <Typography variant="h6" color="primary" gutterBottom>
            Ver Roteiro Completo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Acompanhe todos os detalhes da viagem
          </Typography>
        </Card>
      </Box>

      {/* Highlights Section */}
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ mt: 4, mb: 2 }}
      >
        Destaques da Viagem
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(5, 1fr)",
          },
          gap: 3,
          mb: 4,
        }}
      >
        {[
          {
            title: "Magic Kingdom",
            date: "22/11/2025",
            description: "O parque mais famoso da Disney!",
            highlight: "Show de fogos do Castelo",
          },
          {
            title: "Epic Universe",
            date: "25/11/2025",
            description: "O mais novo parque da Universal Studios",
            highlight: "Super Nintendo World",
          },
          {
            title: "Black Friday",
            date: "28/11/2025",
            description: "Aproveite os melhores descontos",
            highlight: "Promoções em eletrônicos e roupas",
          },
          {
            title: "NBA Game",
            date: "01/12/2025",
            description: "Jogo do Miami Heat vs LA Clippers",
            highlight: "Kaseya Center, Miami - 18:30",
          },
          {
            title: "Miami",
            date: "02/12/2025",
            description: "Passeio de um dia em Miami com a galera",
            highlight: "South Beach e Little Havana",
          },
        ].map((item, index) => (
          <Card
            key={index}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="h3" gutterBottom>
                {item.title}
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                {item.date}
              </Typography>
              <Typography paragraph>{item.description}</Typography>
              <Box
                sx={{
                  p: 1.5,
                  bgcolor: "primary.light",
                  color: "white",
                  borderRadius: 1,
                  mt: "auto",
                }}
              >
                <Typography variant="body2">
                  <strong>Destaque:</strong> {item.highlight}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          mt: 6,
          p: 4,
          bgcolor: "primary.main",
          color: "white",
          borderRadius: 2,
          textAlign: "center",
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Pronto para começar a aventura?
        </Typography>
        <Typography paragraph sx={{ mb: 3, maxWidth: 700, mx: "auto" }}>
          Acesse o roteiro completo para ver todos os detalhes da viagem,
          incluindo horários, atrações imperdíveis e dicas especiais para cada
          dia.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => navigate("/day/1")}
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1.1rem",
            fontWeight: "bold",
            textTransform: "none",
            borderRadius: 2,
            boxShadow: 3,
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: 4,
            },
            transition: "all 0.2s",
          }}
        >
          Ver Roteiro Completo
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
