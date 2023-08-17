import { Typography, Avatar, Card, Grid } from "@mui/material";

export default function PeopleList() {
  var items = [
    {
      img: "http://daibo.info/imgs/photo.jpg",
      name_en: "Dai Bo",
      name_zh: "戴勃",
      title: "青年科学家",
      email: "daibo@pjlab.org.cn/doubledaibo@gmail.com",
    },
    {
      img: "http://mmlab.ie.cuhk.edu.hk/images/people/new2019/raoanyi.jpg",
      name_en: "Anyi Rao",
      name_zh: "饶安逸",
      title: "青年研究员",
      email: "anyirao@link.cuhk.edu.hk",
    },
    {
      img: "http://mmlab.ie.cuhk.edu.hk/images/people/new2019/xulinning.jpg",
      name_en: "Linning Xu",
      name_zh: "徐霖宁",
      title: "青年研究员",
      email: "linningxu@link.cuhk.edu.hk",
    },
    {
      img: "http://mmlab.ie.cuhk.edu.hk/images/people/new2019/xulinning.jpg",
      name_en: "Linning Xu",
      name_zh: "徐霖宁",
      title: "青年研究员",
      email: "linningxu@link.cuhk.edu.hk",
    },
  ];

  return (
    <div>
      <Grid container spacing={1} direction="raws">
        {items.map((item, i) => (
          <PeopleItem key={i} item={item} />
        ))}
      </Grid>
    </div>
  );
}

function PeopleItem(props) {
  return (
    <Card sx={{ minWidth: 350, m: 1 }}>
      <Grid
        container
        direction="raws"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid>
          <Avatar
            alt={props.item.name_en}
            src={props.item.img}
            sx={{ width: 100, height: 100, m: 1 }}
          />
        </Grid>
        <Grid sx={{ ml: 2 }}>
          <Grid>
            <Typography variant="h4">{props.item.name_en}</Typography>
          </Grid>
          <Grid>
            <Typography>{props.item.name_zh}</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Typography sx={{ textAlign: "center" }}>{props.item.title}</Typography>
      <Typography sx={{ textAlign: "center" }}>{props.item.email}</Typography>
    </Card>
  );
}
