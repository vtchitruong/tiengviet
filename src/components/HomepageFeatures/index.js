import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Khoa học và tin cậy',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Các ghi chú được tổng hợp và sắp xếp một cách logic, dựa trên những tài liệu ngôn ngữ học uy tín, giúp người đọc dễ dàng tiếp cận kiến thức một cách bài bản và có chiều sâu.
      </>
    ),
  },
  {
    title: 'Dễ tra cứu',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Tập trung vào trải nghiệm đọc và tra cứu. Nội dung được trình bày mạch lạc, đi thẳng vào vấn đề, kết hợp với thanh điều hướng thông minh giúp bạn nhanh chóng tìm thấy thông tin mình cần.
      </>
    ),
  },
  {
    title: 'Phi lợi nhuận',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Website được xây dựng hoàn toàn vì mục đích chia sẻ tri thức, phi thương mại. Mọi kiến thức tại đây đều miễn phí, nhằm góp phần vào việc gìn giữ và lan tỏa vẻ đẹp của tiếng Việt.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
