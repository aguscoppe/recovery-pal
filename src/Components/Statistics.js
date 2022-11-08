import { Box, Card, Grid, CardContent, Typography } from "@mui/material";
import { CChart } from "@coreui/react-chartjs";
import { theme } from "../theme";
import Carousel from "react-material-ui-carousel";

const Statistics = ({ report, routineAchievements }) => {
  return (
    <>
      <Grid sx={{ p: "20px" }} container columnSpacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Carousel
            indicators={false}
            animation="slide"
            sx={{ width: "100%", minHeight: "400px" }}
            navButtonsAlwaysVisible={true}
          >
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={12}
            >
              <Card
                sx={{
                  marginBottom: "12px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography color={theme.palette.primary.main} fontWeight="700">
                  Cumplimiento de ejercicios
                </Typography>
                <CChart
                  type="doughnut"
                  data={{
                    labels: ["Completo", "No Completo"],
                    datasets: [
                      {
                        backgroundColor: [
                          theme.palette.primary.main,
                          theme.palette.secondary.main,
                        ],
                        data: [40, 20],
                      },
                    ],
                  }}
                />
              </Card>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={12}
            >
              <Card
                sx={{
                  marginBottom: "12px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography color={theme.palette.primary.main} fontWeight="700">
                  Estado de ánimo
                </Typography>
                <CChart
                  type="doughnut"
                  data={{
                    labels: ["N/C", "Negativo", "Regular", "Positivo"],
                    datasets: [
                      {
                        backgroundColor: [
                          theme.palette.secondary.main,
                          "red",
                          theme.palette.primary.main,
                          "green",
                        ],
                        data: [
                          report.timesFeeling_0,
                          report.timesFeeling_1,
                          report.timesFeeling_2,
                          report.timesFeeling_3,
                        ],
                      },
                    ],
                  }}
                />
              </Card>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={12}
            >
              <Card
                sx={{
                  marginBottom: "12px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography color={theme.palette.primary.main} fontWeight="700">
                  Dolor físico
                </Typography>
                <CChart
                  type="doughnut"
                  data={{
                    labels: ["N/C", "Poco", "Regular", "Mucho"],
                    datasets: [
                      {
                        backgroundColor: [
                          theme.palette.secondary.main,
                          theme.palette.primary.main,
                          "orange",
                          "red",
                        ],
                        data: [
                          report.timesPain_0,
                          report.timesPain_1,
                          report.timesPain_2,
                          report.timesPain_3,
                        ],
                      },
                    ],
                  }}
                />
              </Card>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              item
              xs={12}
            >
              <Card
                sx={{
                  marginBottom: "12px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography color={theme.palette.primary.main} fontWeight="700">
                  Evolución del tratamiento
                </Typography>
                <CChart
                  type="doughnut"
                  data={{
                    labels: ["N/C", "Poco", "Regular", "Mucho"],
                    datasets: [
                      {
                        backgroundColor: [
                          theme.palette.secondary.main,
                          theme.palette.primary.main,
                          "orange",
                          "green",
                        ],
                        data: [
                          report.timesImprove_0,
                          report.timesImprove_1,
                          report.timesImprove_2,
                          report.timesImprove_3,
                        ],
                      },
                    ],
                  }}
                />
              </Card>
            </Grid>
          </Carousel>
        </Grid>
      </Grid>
    </>
  );
};

export default Statistics;
