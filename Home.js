import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import PrimaryButton from './components/PrimaryButton';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.inner}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.logoText}>⸮Quizzin?</Text>

        <View style={styles.featureRow}>
          <View style={styles.featureCopy}>
            <Text style={styles.sectionTitle}>Easy to Use:</Text>
            <Text style={styles.bodyText}>
              This app has features that are accessible to everyone, ranking #1
              in the world for our easy to use features.
            </Text>
          </View>

          <Image
            style={styles.featureImage}
            resizeMode="contain"
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/6214/6214152.png',
            }}
          />
        </View>

        <Text style={styles.bodyText}>
          We have made our app one that's completely user friendly for our
          consumers.
        </Text>
        <Text style={styles.bodyText}>
          You will easily be able to view each screen with just a click of
          button, so that you can just sit back and relax knowing that everything
          will be fine on the app.
        </Text>
        <Text style={styles.bodyText}>
          These features include buttons that help with navigating through
          screens and more.
        </Text>

        <Text style={styles.sectionTitle}>Interactive:</Text>
        <View style={styles.featureRow}>
          <View style={styles.featureCopy}>
            <Text style={styles.bodyText}>
              Interactivity was one of our biggest must-haves in Quizzin, adding
              little features to show this.
            </Text>
          </View>

          <Image
            style={styles.featureImage}
            resizeMode="contain"
            source={{
              uri: 'https://www.spielcreative.com/blog/wp-content/themes/spielcreative/assets/images/interactive-video-statistics.png',
            }}
          />
        </View>

        <Text style={styles.bodyText}>
          Some features that make Quizzin interactive are the points you get for
          every answer you get. This allows you to try your best.
        </Text>
        <Text style={styles.bodyText}>
          With having interactive features, it makes learning for students more
          fun and engaging (an achievement we want to create).
        </Text>
        <Text style={styles.bodyText}>
          Learning should be fun, not boring, this is why you should play with
          Quizzin.
        </Text>

        <Text style={styles.calloutText}>
          To view our quizzes click on the button below:
        </Text>

        <PrimaryButton
          accessibilityLabel="Open quiz catalog"
          style={styles.catalogButton}
          onPress={() => navigation.navigate('Catalog')}
        >
          Catalog
        </PrimaryButton>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8EC',
  },
  content: {
    alignItems: 'center',
    padding: 28,
    paddingBottom: 56,
  },
  inner: {
    maxWidth: 1120,
    width: '100%',
  },
  welcomeText: {
    color: 'green',
    fontSize: 48,
    fontWeight: '700',
    marginTop: 28,
    textAlign: 'center',
  },
  logoText: {
    color: 'green',
    fontSize: 48,
    fontWeight: '700',
    marginBottom: 44,
    textAlign: 'center',
  },
  featureRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 24,
    marginBottom: 28,
  },
  featureCopy: {
    flex: 1,
    minWidth: 280,
  },
  sectionTitle: {
    color: 'brown',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 18,
    marginTop: 16,
    textDecorationLine: 'underline',
  },
  bodyText: {
    color: '#000',
    fontSize: 20,
    lineHeight: 28,
    marginBottom: 10,
  },
  featureImage: {
    borderRadius: 10,
    flex: 1,
    height: 220,
    maxWidth: 520,
    minWidth: 260,
  },
  calloutText: {
    alignSelf: 'center',
    color: 'green',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 14,
    marginTop: 34,
    textAlign: 'center',
  },
  catalogButton: {
    alignSelf: 'center',
    minWidth: 132,
  },
});
